import React from 'react';
import {
  SectionList,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  Image,
} from 'react-native';
import {
  Menu,
  useToast,
  Box,
  Modal,
  Button,
  Input,
  FormControl,
} from 'native-base';
import {styles} from './styles';
import {useDispatch, useSelector} from 'react-redux';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Geolocation from '@react-native-community/geolocation';

export default function TaskList(props) {
  const [modalVisible, setModalVisible] = React.useState(false);
  const [editTask, setEditTask] = React.useState();
  const [loggedHours, setLoggedHours] = React.useState(0);
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const [position, setPosition] = React.useState('');
  const {navigation} = props;
  const allTasks = useSelector(state => state.TaskReducer.tasks);
  const dispatch = useDispatch();
  const toast = useToast();
  console.log('allTasks', allTasks);
  const displayTask = (name, desc) => {
    let length = 40;
    let content = name + '-' + desc;
    if (content.length >= length) {
      return content.substring(0, length) + '...';
    } else {
      return content;
    }
  };

  function changeTaskStatus(status, task) {
    let tempTasks = [...allTasks];
    tempTasks.forEach(tempTask => {
      if (tempTask.id === task.id) {
        tempTask.status = status;
      }
    });
    dispatch({
      type: 'SETTASKS',
      payload: tempTasks,
    });
    toast.show({
      render: () => {
        return (
          <Box bg="emerald.500" px="2" py="1" rounded="sm" mb={5} color="#fff">
            <Text style={styles.alertGreet}>Task updated Successfully !</Text>
          </Box>
        );
      },
    });
  }

  function getGeoPosition() {
    Geolocation.getCurrentPosition(
      pos => {
        setPosition(JSON.stringify(pos));
      },
      error => {
        console.log(error);
        //Alert.alert('GetCurrentPosition Error', JSON.stringify(error))
      },
      {enableHighAccuracy: true},
    );
  }

  function logTheHours(task) {
    let tempTasks = [...allTasks];
    tempTasks.forEach(tempTask => {
      if (tempTask.id === task.id) {
        tempTask.loggedHours = loggedHours;
        tempTask.geo = position;
      }
    });
    dispatch({
      type: 'SETTASKS',
      payload: tempTasks,
    });
    toast.show({
      render: () => {
        return (
          <Box bg="emerald.500" px="2" py="1" rounded="sm" mb={5} color="#fff">
            <Text style={styles.alertGreet}>
              Logged hours updated Successfully !
            </Text>
          </Box>
        );
      },
    });
  }
  function deleteTask(task) {
    let tempTasks = [...allTasks];
    tempTasks = tempTasks.filter(tempTask => tempTask.id !== task.id);
    dispatch({
      type: 'SETTASKS',
      payload: tempTasks,
    });
    toast.show({
      render: () => {
        return (
          <Box bg="emerald.500" px="2" py="1" rounded="sm" mb={5}>
            <Text style={styles.alertGreet}> Task deleted Successfully !</Text>
          </Box>
        );
      },
    });
  }
  return (
    <ScrollView style={styles.taskContainer}>
      <Text style={styles.HeaderText}>Tasks</Text>
      {allTasks &&
        allTasks.length > 0 &&
        allTasks.map((task, index) => {
          {
            console.log('task', task);
          }
          return (
            <View style={styles.taskWrapper} key={index}>
              {task.status === 'active' ? (
                <MaterialIcons
                  name={'run-circle'}
                  size={28}
                  style={{color: '#3ecdff'}}
                />
              ) : task.status === 'pause' ? (
                <MaterialIcons
                  name={'pause-circle-filled'}
                  size={28}
                  style={{color: '#fbbb00'}}
                />
              ) : (
                <MaterialIcons
                  name={'radio-button-on'}
                  size={28}
                  style={{color: '#ff3ee6'}}
                />
              )}
              <View style={styles.titleWrapper}>
                <Text style={styles.titleText}>
                  {displayTask(task.name, task.description)}
                </Text>
                <View style={styles.labelWrapper}>
                  <Text style={styles.labelText}>
                    Tags : {task.tags && task.tags.join(',')}
                  </Text>
                </View>
                {task.loggedHours && (
                  <View style={styles.labelWrapper}>
                    <MaterialIcons
                      name={'alarm'}
                      size={16}
                      style={{color: '#3366ff'}}
                    />
                    <Text style={styles.labelText}>
                      : {task.loggedHours + 'Hrs'}
                    </Text>
                  </View>
                )}
              </View>
              <Menu
                style={{fontFamily: 'Poppins-Medium'}}
                w="190"
                trigger={triggerProps => {
                  return (
                    <Pressable
                      accessibilityLabel="More options menu"
                      {...triggerProps}>
                      <MaterialIcons name={'more-vert'} size={22} />
                    </Pressable>
                  );
                }}>
                <Menu.Item
                  onPress={() => {
                    navigation.navigate('Edit', {task: task});
                  }}>
                  <MaterialIcons
                    name={'edit'}
                    size={20}
                    style={{color: '#3366ff'}}
                  />
                  Edit
                </Menu.Item>
                <Menu.Item
                  isDisabled={task.status === 'active'}
                  onPress={() => {
                    changeTaskStatus('active', task);
                  }}>
                  <MaterialIcons
                    name={'run-circle'}
                    size={20}
                    style={{color: '#3ecdff'}}
                  />
                  Start
                </Menu.Item>
                <Menu.Item
                  isDisabled={
                    task.status === 'in-active' || task.status === 'pause'
                  }
                  onPress={() => {
                    changeTaskStatus('pause', task);
                  }}>
                  <MaterialIcons
                    name={'pause-circle-filled'}
                    size={20}
                    style={{color: '#fbbb00'}}
                  />
                  Pause
                </Menu.Item>
                <Menu.Item
                  isDisabled={task.status === 'in-active'}
                  onPress={() => {
                    changeTaskStatus('in-active', task);
                  }}>
                  <MaterialIcons
                    name={'radio-button-on'}
                    size={20}
                    style={{color: '#ff3ee6'}}
                  />
                  Stop
                </Menu.Item>
                <Menu.Item
                  onPress={() => {
                    getGeoPosition();
                    setModalVisible(true);
                    setEditTask(task);
                  }}>
                  <MaterialIcons
                    name={'alarm'}
                    size={20}
                    style={{color: '#3366ff'}}
                  />
                  Log Hours
                </Menu.Item>
                <Menu.Item
                  onPress={() => {
                    deleteTask(task);
                  }}>
                  <MaterialIcons
                    name={'delete'}
                    size={20}
                    style={{color: 'red'}}
                  />
                  Delete
                </Menu.Item>
              </Menu>
            </View>
          );
        })}
      <Modal
        isOpen={modalVisible}
        onClose={() => setModalVisible(false)}
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}>
        <Modal.Content>
          <Modal.CloseButton />
          <Modal.Header>Log Hours</Modal.Header>
          <Modal.Body>
            <FormControl>
              <FormControl.Label>Hours</FormControl.Label>
              <Input
                keyboardType="numeric"
                onChangeText={val => {
                  setLoggedHours(val);
                }}
              />
            </FormControl>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button
                variant="ghost"
                colorScheme="blueGray"
                onPress={() => {
                  setModalVisible(false);
                }}>
                Cancel
              </Button>
              <Button
                onPress={() => {
                  logTheHours(editTask);
                  setModalVisible(false);
                }}>
                Save
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
      {allTasks && allTasks.length === 0 && (
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
          }}>
          <Image
            style={styles.notasksImg}
            source={require('../../../assets/img/notasks.webp')}></Image>
          <Text style={styles.HeaderText}>No Tasks to view right now...</Text>
        </View>
      )}
    </ScrollView>
  );
}

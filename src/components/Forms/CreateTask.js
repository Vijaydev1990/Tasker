import React from 'react';
import {
  SectionList,
  StyleSheet,
  Text,
  View,
  ScrollView,
  ScrollViewBase,
  KeyboardAvoidingView,
} from 'react-native';
import {
  FormControl,
  Input,
  TextArea,
  Stack,
  WarningOutlineIcon,
  Box,
  Center,
  NativeBaseProvider,
  Button,
  useToast,
} from 'native-base';
import {styles} from './styles';
import {useDispatch, useSelector} from 'react-redux';
import ReactChipsInput from 'react-native-chips';
import {useRoute} from '@react-navigation/native';

export default function CreateTask(props) {
  const {tasks} = props;
  const route = useRoute();
  const [isLoading, setIsLoading] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [isEditMode, setIsEditMode] = React.useState(false);
  const [editTask, setEditTask] = React.useState();
  const [tags, setTags] = React.useState([]);
  const [formValue, setFormValue] = React.useState({name: '', description: ''});
  const toast = useToast();
  const dispatch = useDispatch();
  const allTasks = useSelector(state => state.TaskReducer.tasks);

  React.useEffect(() => {
    console.log('route', route);
    if (route.name === 'Edit') {
      setIsEditMode(true);
    }
    if (route.name === 'Edit' && route.params.task) {
      setEditTask(route.params.task);
      const ETask = route.params.task;
      console.log('editTask', ETask);
      setFormValue({
        ...formValue,
        name: ETask.name,
        description: ETask.description,
      });
      setTags(ETask.tags);
    }
  }, [route.params]);
  const handleSubmit = () => {
    setIsSubmitted(true);
    if (formValue.name !== '' && formValue.description !== '') {
      setIsLoading(true);
      if (route.name === 'Create') {
        let id = parseInt(Math.random() * 1000000000, 10);
        dispatch({
          type: 'ADDTASK',
          payload: {...formValue, tags, id, status: 'in-active'},
        });
        setTimeout(() => {
          toast.show({
            render: () => {
              return (
                <Box bg="emerald.500" px="2" py="1" rounded="sm" mb={5}>
                  <Text style={styles.alertGreet}>
                    Task added Successfully !
                  </Text>
                </Box>
              );
            },
          });
          setFormValue({name: '', description: ''});
          setIsSubmitted(false);
          setTags([]);
          setIsLoading(false);
        }, 2000);
      }
      if (route.name === 'Edit') {
        console.log('editTask-----', editTask);
        let tempTasks = [...allTasks];
        tempTasks.forEach(tempTask => {
          if (tempTask.id === editTask.id) {
            tempTask.name = formValue.name;
            tempTask.description = formValue.description;
            tempTask.tags = tags;
          }
        });
        dispatch({
          type: 'SETTASKS',
          payload: tempTasks,
        });
        setTimeout(() => {
          toast.show({
            render: () => {
              return (
                <Box bg="emerald.500" px="2" py="1" rounded="sm" mb={5}>
                  <Text style={styles.alertGreet}>
                    Task updated Successfully !
                  </Text>
                </Box>
              );
            },
          });
          setIsSubmitted(false);
          setIsLoading(false);
        }, 2000);
      }
    }
  };
  const handleChange = (e, field) => {
    let tempFormVal = {...formValue};
    tempFormVal[field] = e;
    setFormValue({...tempFormVal});
  };
  return (
    <KeyboardAvoidingView>
      <ScrollView contentContainerStyle={{flexGrow: 1, marginBottom: 50}}>
        <Text style={styles.titleText}>
          {isEditMode ? 'Edit Task' : 'Add Tasks'}
        </Text>
        <Box alignItems="center">
          <Box w="100%" maxWidth="330px">
            <FormControl
              style={styles.formControl}
              isInvalid={formValue.name.length === 0 && isSubmitted}>
              <Stack mx="3">
                <FormControl.Label style={styles.formLabel}>
                  Task Name
                </FormControl.Label>
                <TextArea
                  rowSpan={3}
                  value={formValue.name}
                  defaultValue={formValue.name}
                  placeholder=""
                  onChangeText={e => {
                    handleChange(e, 'name');
                  }}
                  style={styles.inputItem}
                />
                <FormControl.ErrorMessage
                  style={styles.errMsg}
                  leftIcon={<WarningOutlineIcon size="xs" />}>
                  This field cannot be empty.
                </FormControl.ErrorMessage>
              </Stack>
            </FormControl>
            <FormControl
              style={styles.formControl}
              isInvalid={formValue.description.length === 0 && isSubmitted}>
              <Stack mx="3">
                <FormControl.Label style={styles.formLabel}>
                  Task Description
                </FormControl.Label>
                <TextArea
                  rowSpan={3}
                  value={formValue.description}
                  defaultValue={formValue.description}
                  placeholder=""
                  onChangeText={e => {
                    handleChange(e, 'description');
                  }}
                  style={styles.inputItem}
                />
                <FormControl.ErrorMessage
                  style={styles.errMsg}
                  leftIcon={<WarningOutlineIcon size="xs" />}>
                  This field cannot be empty.
                </FormControl.ErrorMessage>
              </Stack>
            </FormControl>
            <FormControl style={styles.formControl}>
              <Stack mx="3">
                <FormControl.Label>Tags</FormControl.Label>

                <ReactChipsInput
                  label=" "
                  initialChips={tags}
                  onChangeChips={chips => {
                    setTags(chips);
                  }}
                  chipStyle={{
                    borderColor: '#ccc',
                    backgroundColor: '#ccc',
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                    fontFamily: 'Poppins-Medium',
                  }}
                  inputStyle={{
                    fontSize: 16,
                    borderColor: '#ccc',
                    borderWidth: 1,
                    height: 80,
                  }}
                  labelStyle={{
                    color: '#ccc',
                    fontSize: 14,
                    fontFamily: 'Poppins-Medium',
                  }}
                  labelOnBlur={{color: '#666'}}
                />
              </Stack>
            </FormControl>

            <FormControl>
              <Stack mx="3">
                <Button
                  style={styles.submitBtn}
                  isLoading={isLoading}
                  isLoadingText="Submitting"
                  onPress={() => {
                    handleSubmit();
                  }}>
                  <Text style={styles.submitBtnTxt}>
                    {isEditMode ? 'Update' : 'Add'}
                  </Text>
                </Button>
              </Stack>
            </FormControl>
          </Box>
        </Box>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

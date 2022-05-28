import React from 'react';
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  Input,
  Skeleton,
  useColorModeValue,
} from '@chakra-ui/react';
import { useAppDispatch, useAppSelector } from '../configs/store';
import Paper from '../shared/components/Paper';
import { decrement, increment, incrementAsync, reset } from '../shared/reducers/counter.reducer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { Controller, useForm } from 'react-hook-form';

export default function Counter() {
  const dispatch = useAppDispatch();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      count: 0,
    },
  });
  const { loading, count } = useAppSelector(state => state.counter);

  const onSubmit = values => {
    console.log(values);
    dispatch(incrementAsync({ count: +values.count, delay: 1000 }));
  };

  return (
    <Paper>
      <Box as="div" display="flex" flexDir="column" w={{ base: 'full', md: 'md' }}>
        <Input
          type="text"
          variant="outline"
          color={useColorModeValue('black', 'white')}
          fontWeight="bold"
          w="full"
          value={count}
          disabled
        />
        <Skeleton
          my={1}
          height="5px"
          startColor="teal.200"
          endColor="teal.800"
          opacity={loading ? 1 : 0}
        />
        <Box
          as="div"
          w="full"
          display="flex"
          flexDir={{ base: 'column', md: 'row' }}
          justifyContent="center"
          mt={3}
        >
          <Button colorScheme="teal" m={2} onClick={() => dispatch(increment())}>
            <FontAwesomeIcon icon={solid('plus')} />
          </Button>
          <Button colorScheme="red" m={2} onClick={() => dispatch(decrement())}>
            <FontAwesomeIcon icon={solid('minus')} />
          </Button>
          <Button type="button" colorScheme="red" m={2} onClick={() => dispatch(reset())}>
            <FontAwesomeIcon icon={solid('rotate')} />
          </Button>
          <Box as="form" m={2} onSubmit={handleSubmit(onSubmit)}>
            <Controller
              control={control}
              name="count"
              rules={{
                required: 'this is required',
                min: { value: 1, message: 'this value so min' },
              }}
              render={({ field }) => (
                <FormControl isInvalid={!!errors.count}>
                  <Input
                    type="number"
                    variant="outline"
                    color={useColorModeValue('black', 'white')}
                    errorBorderColor="crimson"
                    {...field}
                  />
                  <FormErrorMessage>
                    {errors.count?.message || 'this field is required'}
                  </FormErrorMessage>
                </FormControl>
              )}
            />

            <Button type="submit" colorScheme="blue" mt={2} isLoading={loading}>
              <FontAwesomeIcon icon={solid('plus')} />
              &nbsp; Async
            </Button>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
}

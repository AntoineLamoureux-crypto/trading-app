import {
  Avatar,
  Box,
  HStack,
  Popover,
  PopoverBody,
  PopoverTrigger,
  PopoverArrow,
  PopoverContent,
  PopoverHeader,
  Stack,
  InputGroup,
  InputLeftElement,
  Text,
  Switch,
  Input,
  PopoverFooter,
  PopoverCloseButton,
  Button,
  Spacer,
} from '@chakra-ui/react';
import { Logo } from './Logo';
import { notifications } from './data';
import { FiPhone, FiUser } from 'react-icons/fi';
import { HiOutlineMail } from 'react-icons/hi';

export default function NavBar() {
  return (
    <Box textColor="white" h="fit-content">
      <Box bg="bg.accent.default" zIndex="tooltip">
        <HStack justify="space-between" p="5">
          <Logo />
          <HStack spacing="2">
            <Popover w="fit-content">
              <PopoverTrigger>
                <Avatar
                  boxSize="10"
                  src="https://i.pravatar.cc/300"
                  cursor="pointer"
                />
              </PopoverTrigger>
              <PopoverContent borderColor="gray.900">
                <PopoverArrow />
                <PopoverHeader bg="black" borderColor="gray.900">
                  <Text
                    textStyle="xl"
                    fontSize="lg"
                    fontWeight="medium"
                    color="white"
                  >
                    Settings
                  </Text>
                  <PopoverCloseButton />
                </PopoverHeader>
                <PopoverBody bg="black" color="white" borderColor="black">
                  <Box textColor="black">
                    <Stack spacing="5">
                      <Stack spacing="1">
                        <Text textStyle="lg" fontWeight="medium" color="white">
                          Notifications
                        </Text>
                      </Stack>
                      {notifications.map((notifcation, id) => (
                        <Stack
                          key={id}
                          justify="space-between"
                          direction="row"
                          spacing="4"
                        >
                          <Stack spacing="0.5" fontSize="sm">
                            <Text fontWeight="medium" color="white">
                              {notifcation.type}
                            </Text>
                            <Text color="white">{notifcation.description}</Text>
                          </Stack>
                          <Switch defaultChecked={notifcation.isActive} />
                        </Stack>
                      ))}
                      <Stack spacing="1">
                        <Text textStyle="lg" fontWeight="medium" color="white">
                          Profile
                        </Text>
                        <Stack
                          justify="space-between"
                          direction="row"
                          spacing="4"
                          pt="5px"
                        >
                          <Stack spacing="0.5" fontSize="sm" w="100%">
                            <InputGroup>
                              <InputLeftElement pointerEvents="none">
                                <FiUser color="white" />
                              </InputLeftElement>
                              <Input
                                type="text"
                                variant="flushed"
                                placeholder="Username"
                                color="gray"
                                borderColor="gray.900"
                              />
                            </InputGroup>

                            <InputGroup>
                              <InputLeftElement pointerEvents="none">
                                <HiOutlineMail color="white" />
                              </InputLeftElement>
                              <Input
                                type="email"
                                variant="flushed"
                                placeholder="Email"
                                borderColor="gray.900"
                                color="gray"
                              />
                            </InputGroup>

                            <InputGroup>
                              <InputLeftElement pointerEvents="none">
                                <FiPhone color="white" />
                              </InputLeftElement>
                              <Input
                                type="tel"
                                variant="flushed"
                                placeholder="Phone number"
                                borderColor="gray.900"
                                color="gray"
                              />
                            </InputGroup>
                          </Stack>
                        </Stack>
                      </Stack>
                    </Stack>
                  </Box>
                </PopoverBody>
                <PopoverFooter bg="black" borderColor="gray.900">
                  <HStack textColor="black">
                    <Spacer />

                    <Button
                      size="sm"
                      bg="blue.400"
                      textColor="white"
                      _hover={{ bg: 'blue.500' }}
                    >
                      Save
                    </Button>
                  </HStack>
                </PopoverFooter>
              </PopoverContent>
            </Popover>
          </HStack>
        </HStack>
      </Box>
    </Box>
  );
}

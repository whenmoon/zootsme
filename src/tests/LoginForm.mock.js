/**
 * @jest-environment jsdom
 */

export const mocks = {
  

  main: jest.fn(),
  setEmailOnLogin: jest.fn(),
  signIn: {
    signInWithEmailAndPassword: jest.fn().mockImplementation((email, password) => new Promise((_, reject) => reject())),
    createUserWithEmailAndPassword: jest.fn().mockImplementation((email, password) => new Promise((resolve, reject) => {}))
  },
  initialState: {
    email: '',
    password: '',
    error: '',
    loading: false
  },
  loadWithErrorState: {
    loading: true,
    error: 'help'
  },
  authFailedState: {
    email: '',
    error: 'Authentication failed',
    password: '',
    loading: false
  },
  fakeUserLoadingState: {
    email: 'crazymonkey.com',
    password: '123',
    loading: true,
    error: 'help'
  },fakeUserState: {
    email: 'crazymonkey.com',
    password: '123'
  },
  badResultState: {
    error: 'bad result'
  },
  loadingTrueState: {
    loading: true
  }








}


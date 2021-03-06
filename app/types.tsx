export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
};

export type TabOneParamList = {
  TabOneScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};

export type TabAuthParamList = {
  TabTwoScreen: undefined;
};

export type TabMainParamList = {
  TabTwoScreen: undefined;
};

export type TabChatParamList = {
  TabTwoScreen: undefined;
};

export type UserT = {
  userInfo: {
    email: string;
    pass: string;
    token: string;
  };
  isAuth: boolean;
  isLoading: boolean;
  error: boolean;
};

export type HeaderProps = {
    user: {
      userName: string;
      userGroupName: string;
      branchCode: string;
      branchName: string;
    } | null;
    onLogout: () => void;
    onChangeLang: (lang: string) => void;
    onChangePassword: () => void;
    onClearMenuSession: () => void;
    currentLang: string;
    t: (key: string) => string;
    LinkComponent: React.ElementType;
    ImageComponent: React.ElementType;
    HeaderToggleComponent: React.ElementType;
  };
  
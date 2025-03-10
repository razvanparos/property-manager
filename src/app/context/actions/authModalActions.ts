export const MODAL_SHOW = "MODAL_SHOW";

class AuthModalActions {
  static #dispatch: any;

  static registerActions(dispatch: any) {
    this.#dispatch = dispatch;
  }

  static showModal(modalType: string, modalState: boolean) {
    this.#dispatch({
      type: MODAL_SHOW,
      payload: { modalType, modalState },
    });
  }
}

export default AuthModalActions;

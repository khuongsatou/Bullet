// Màn hình thực hiện + hành động
//----- Các key hiện đã khai báo

// ...
export const getTypes = (name, key) => {
  return name + '_' + key;
};

export const getTypesRequesting = (name) => {
  return name + '_' + 'REQUESTING'; //SCREEN_REQUESTING
};

export const getTypesUpdate = (name) => {
  return name + '_' + 'UPDATE'; //SCREEN_UPDATE
};

export const getTypesRemove = (name) => {
  return name + '_' + 'REMOVE'; //SCREEN_REMOVE
};

export const getTypesAdd = (name) => {
  return name + '_' + 'ADD'; //SCREEN_ADD
};

export const getTypesSucess = (name) => {
  return name + '_' + 'SUCCESS'; //SCREEN_SUCCESS
};

export const getTypesLoading = (name) => {
  return name + '_' + 'LOADING'; //SCREEN_LOADING
};

export const getTypesError = (name) => {
  return name + '_' + 'ERROR'; ////SCREEN_ERROR
};

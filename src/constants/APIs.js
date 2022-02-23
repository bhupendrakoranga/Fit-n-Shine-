const url = 'https://test-ismart.herokuapp.com/api/v1';
const urll = 'https://ismart-dev-files.s3.amazonaws.com/customerImage/profile';

//Login API
export const LoginAPI = `${url}/customers/login`;
export const SignInUp = `${url}/customers/signup`;

//Service Card
export const ServiceCardAPI = `${url}/customers/service-types`;
export const FavouriteCardAPI = `${url}/customers/get-all-my-favourite-business`;
export const GetAllServiceAPI = `${url}/customers/get-all-business`;
export const AddFavourite = `${url}/customers/add-to-my-favourite-business`;
export const RemoveFavourite = `${url}/customers/remove-from-my-favourite-business`;
export const AddRating = `${url}/customers/give-rating-to-staff`;

//Profile API
export const getProfileAPI = `${url}/customers/profile`;
export const updateProfileAPI = `${url}/customers/update-profile`;
export const resetPasswordAPI = `${url}/customers/reset-password`;
export const deleteProfile = `${url}/customers/delete-profile-image`;
export const Verification = `${url}/customers/send-verification-link-to-user-email`;
export const uploadImage = `${url}/customers/upload-profile-image`;
export const getCentersAPI = `${url}/customers-membership-service`;
export const bookApoinment = `${url}/customers-book-appintment`;
export const getStaffID = `${url}/customers-get-all-staff`;
export const GetAllDate = `${url}/customers-get-all-time-slot-for-date`;
export const GetAllAvilableDate = `${url}/customers-get-all-avilable-dates`;

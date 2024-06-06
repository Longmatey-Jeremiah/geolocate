export class email {
  static REQUIRED = 'Email is required';
  static REGEXP = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  static EXISTS = 'This is email already exists';
  static DOESNOTEXIST = "This email doesn't not exist";
}

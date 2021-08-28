class EmployeePayrollData {
  get name() {
    return this._name;
  }

  set name(name) {
    let nameRegex = /^[A-Z][a-z]{2,}$/;
    if (nameRegex.test(name)) {
      this._name = name;
    } else {
      throw "Invalid name";
    }
  }

  get picture() {
    return this._picture;
  }

  set picture(picture) {
    this._picture = picture;
  }

  get salary() {
    return this._salary;
  }
  set salary(salary) {
    this._salary = salary;
  }

  get gender() {
    return this._gender;
  }

  set gender(gender) {
    this._gender = gender;
  }

  get department() {
    return this._department;
  }

  set department(department) {
    this._department = department;
  }

  get startDate() {
    return this._startDate;
  }

  set startDate(startDate) {
    if (startDate <= new Date()) {
      this._startDate = startDate;
    } else {
      throw "Invalid date";
    }
  }

  get note() {
    return this._note;
  }

  set note(note) {
    this._note = note;
  }
  toString() {
    return (
      "\nName: " +
      this.name +
      "\nPicture: " +
      this.picture +
      "\nGender: " +
      this.gender +
      "\nDepartment: " +
      this.department +
      "\nSalary: " +
      this.salary +
      "\nStart date: " +
      this.startDate +
      "\nNote: " +
      this.note
    );
  }
}

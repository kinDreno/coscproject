export type sluggyHere = {
  slug: string;
  name: string;
  imgPer: string;
  age: number;
  birthday: string;
  address: string;
  hobbies: Hobby[];
  talents: string[];
  hero: string;
  heroImg: string;
};

type Hobby = {
  hobby: string;
  caption: string;
};

export type MainRender = {
  name: string;
};

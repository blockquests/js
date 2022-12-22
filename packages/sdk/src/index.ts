interface Word {
  message: string;
}

export function hello(): Word {
  return { message: 'Hello world!' };
}

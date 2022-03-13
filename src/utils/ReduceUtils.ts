// @ts-nocheck

const byKey = <T extends {}>(data: T[], key: string) => {
  if (!data[0][key]) throw new Error(`I't doesnt' key: ${key} in document`);
  return data.reduce(
    (accum, item: T) => ({
      ...accum,
      // @ts-ignore: Unreachable code error
      [item[key]]: [...(accum[item[key]] || []), item],
    }),
    {}
  );
};

export default { byKey };

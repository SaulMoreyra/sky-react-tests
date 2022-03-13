const byKey = <T extends {}>(data: T[], key: string) => {
  return data.reduce(
    (accum, item: T) => ({
      ...accum,
      // @ts-ignore: Unreachable code error
      [item[key]]: [...(accum[item[key]] || []), item],
    }),
    {} as T
  );
};

export default { byKey };

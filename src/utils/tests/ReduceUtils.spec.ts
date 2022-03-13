// @ts-nocheck
import ReduceUtils from "utils/ReduceUtils";

const animals = [
  { class: "pet", name: "dog", id: "123" },
  { class: "pet", name: "cat", id: "124" },
  { class: "pet", name: "fish", id: "125" },
  { class: "farm", name: "horse", id: "125" },
  { class: "farm", name: "pig", id: "123" },
  { class: "farm", name: "cow", id: "123" },
];

describe("ReduceUtils", () => {
  it("should return a object clasified by key", () => {
    const animalsByClass = ReduceUtils.byKey(animals, "class");
    const pets = animalsByClass["pet"];
    expect(pets.length).toBe(3);
    pets.forEach(({ class: petClass }) => {
      expect(petClass).toBe("pet");
    });

    const farms = animalsByClass["farm"];
    expect(farms.length).toBe(3);
    farms.forEach(({ class: farmClass }) => {
      expect(farmClass).toBe("farm");
    });
  });

  it("should return a error caused by non exists key", () => {
    try {
      ReduceUtils.byKey(animals, "sea");
    } catch (error) {
      expect(Boolean(error)).toBeTruthy();
    }
  });
});

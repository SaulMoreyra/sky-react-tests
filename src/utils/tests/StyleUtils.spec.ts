import StyleUtils from "utils/StyleUtils";

describe("ShipmentUtils", () => {
  it("should return spacing value with one paramter", () => {
    const spacing = StyleUtils.spacing(1);
    expect(spacing).toBe("8px");
  });

  it("should return spacing value with two paramters", () => {
    const spacing = StyleUtils.spacing(1, 1);
    expect(spacing).toBe("8px 8px");
  });

  it("should return spacing value with four paramters", () => {
    const spacing = StyleUtils.spacing(1, 1, 1, 1);
    expect(spacing).toBe("8px 8px 8px 8px");
  });

  it("should return rgba color from hex without alpha", () => {
    const color = StyleUtils.fade("#AAAAAA");
    expect(color).toBe("rgba(170, 170, 170, 1)");
  });

  it("should return rgba color from hex with alpha", () => {
    const color = StyleUtils.fade("#AAAAAA", 0.5);
    expect(color).toBe("rgba(170, 170, 170, 0.5)");
  });
});

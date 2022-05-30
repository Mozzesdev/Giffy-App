import { expect } from "vitest";
import { renderHook, act } from "@testing-library/react";
import useForm from "../../hooks/useForm";

test("should change keyword", () => {
  const { result } = renderHook(() => useForm());

  act(() => {
    result.current.changeKeyword({ keyword: "Batman" });
  });

  expect(result.current.keyword).toBe("Batman");
});

test("should use initial values", () => {
  const { result } = renderHook(() => useForm({initialKeyword: "Lucas"}));

  expect(result.current.keyword).toBe("Lucas");
});

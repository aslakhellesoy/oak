// Copyright 2018-2022 the oak authors. All rights reserved. MIT license.

import { assert, assertEquals } from "./test_deps.ts";

import { createHttpError, httpErrors } from "./httpError.ts";

const { test } = Deno;

test({
  name: "createHttpError",
  fn() {
    const err = createHttpError(501);
    assert(err instanceof httpErrors.NotImplemented);
    assertEquals(err.status, 501);
    assertEquals(err.name, "NotImplementedError");
    assertEquals(err.message, "Not Implemented");
  },
});

test({
  name: "httpErrors.NotImplemented()",
  fn() {
    const err = new httpErrors.NotImplemented();
    assertEquals(err.status, 501);
    assertEquals(err.name, "NotImplementedError");
    assertEquals(err.message, "Not Implemented");
  },
});

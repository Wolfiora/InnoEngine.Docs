---
uid: api.7c69f6d98f696f8244ed081973b532f3aee248da35969e02828da10825839172
symbol: "engine:Inno.Build:M:Inno.Build.BuildProfileStore.#ctor(System.String,Inno.Core.Serialization.SerializationRegistry)"
source: xml
reviewed: d2bc2f3e154b8f8e8a1434d900322dd6158d0be6bfeb68d677d5ed6477501eb5
title: "BuildProfileStore.Constructor"
kind: api
owners: [Inno.Build]
apiSurface: source-clr
---

Creates a store for one current-format build profile document.

**Parameter `path`:** The project-owned path of the build profile document.

**Parameter `serialization`:** The serialization registry whose active generation owns the generated converter.

**Exception `T:System.ArgumentException`:** Thrown when `path` is empty.

**Exception `T:System.ArgumentNullException`:** Thrown when `serialization` is `null`.

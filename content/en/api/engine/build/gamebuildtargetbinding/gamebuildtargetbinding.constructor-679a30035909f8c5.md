---
uid: api.679a30035909f8c5ed5eaf0ed4ed7e3768204b7749a547948d9952263b3c59a3
symbol: "engine:Inno.Build:M:Inno.Build.GameBuildTargetBinding.#ctor(Inno.Build.IGameBuildTarget,Inno.Build.IGameContentCompiler)"
source: xml
reviewed: 483918cd6574bf2fe5a933f515583ff9e485789e3729f3295e22794c0702b604
title: "GameBuildTargetBinding.Constructor"
kind: api
owners: [Inno.Build]
apiSurface: source-clr
---

Validates a complete binding without starting tools or taking ownership of services.

**Parameter `packager`:** The borrowed platform packaging implementation.

**Parameter `compiler`:** The borrowed content implementation for the same target and authoring generation.

**Exception `T:System.ArgumentNullException`:** Either implementation is null.

**Exception `T:System.ArgumentException`:** A target is unassigned or the two implementation identities disagree.

---
uid: api.679a30035909f8c5ed5eaf0ed4ed7e3768204b7749a547948d9952263b3c59a3
symbol: "engine:Inno.Build:M:Inno.Build.GameBuildTargetBinding.#ctor(Inno.Build.IGameBuildTarget,Inno.Build.IGameContentCompiler)"
source: xml
reviewed: c9bd315987d6ba021f16d5bcc8c5d65cd98c4207e56dbe1d9cda2a20a9214689
title: "Constructor"
kind: api
owners: [Inno.Build]
apiSurface: source-clr
---

Validates a complete binding without starting tools or taking ownership of services.

**Parameter `packager`:** The borrowed platform packaging implementation.

**Parameter `compiler`:** The borrowed content implementation for the same target and authoring generation.

**Exception `T:System.ArgumentNullException`:** Either implementation is null.

**Exception `T:System.ArgumentException`:** A target is unassigned or the two implementation identities disagree.

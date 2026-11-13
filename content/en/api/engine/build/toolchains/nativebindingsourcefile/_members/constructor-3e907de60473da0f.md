---
uid: api.3e907de60473da0fb869c275285480d6b5b761605b9a20aba059e9c310523133
symbol: "engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.NativeBindingSourceFile.#ctor(System.String,System.String,System.Int64,System.String,System.Boolean)"
source: xml
reviewed: 64c891df8909858a4c5c6cb0b160d9791aa9dfcaed79b24f3445cf92e338a973
title: "Constructor"
kind: api
owners: [Inno.Build.Toolchains]
apiSurface: source-clr
---

Identifies exact generated or external bytes needed by a native compilation.

**Parameter `rootId`:** The component-local input root.

**Parameter `relativePath`:** The portable root-relative filename.

**Parameter `length`:** The expected byte length.

**Parameter `sha256`:** The lowercase SHA-256 content identity.

**Parameter `compile`:** Whether this file is a translation unit rather than an include dependency.

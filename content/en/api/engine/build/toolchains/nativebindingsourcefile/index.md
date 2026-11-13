---
uid: api.inno.build.toolchains.0f63dd30a8a0b52d
symbol: "engine:Inno.Build.Toolchains:T:Inno.Build.Toolchains.NativeBindingSourceFile"
source: xml
reviewed: a5f560d6d2a05454824b7652c949512eec59854a97ea237124494bbd93b344b0
title: "NativeBindingSourceFile"
kind: api
owners: [Inno.Build.Toolchains]
apiSurface: source-clr
contracts:
- project.inno-build-toolchains
aliases: []
---

Identifies exact generated or external bytes needed by a native compilation.

**Parameter `rootId`:** The component-local input root.

**Parameter `relativePath`:** The portable root-relative filename.

**Parameter `length`:** The expected byte length.

**Parameter `sha256`:** The lowercase SHA-256 content identity.

**Parameter `compile`:** Whether this file is a translation unit rather than an include dependency.

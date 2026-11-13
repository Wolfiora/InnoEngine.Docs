---
uid: api.inno.build.toolchains.099e8a63467d45c9
symbol: "engine:Inno.Build.Toolchains:T:Inno.Build.Toolchains.NativeBindingIncludeDirectory"
source: xml
reviewed: f2f9392e7252f522d78faf2c48ae6fd497cfc6745e78109b9c62dd521bdc5ff2
title: "NativeBindingIncludeDirectory"
kind: api
owners: [Inno.Build.Toolchains]
apiSurface: source-clr
contracts:
- project.inno-build-toolchains
aliases: []
---

Preserves the order and search semantics of one native include requirement.

**Parameter `rootId`:** The component-local input root.

**Parameter `relativePath`:** The root-relative directory, or empty for the root itself.

**Parameter `system`:** Whether this directory contains system headers.

**Parameter `framework`:** Whether the compiler must use framework search semantics.

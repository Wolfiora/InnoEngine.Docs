---
uid: api.inno.build.toolchains.099e8a63467d45c9
symbol: "engine:Inno.Build.Toolchains:T:Inno.Build.Toolchains.NativeBindingIncludeDirectory"
source: xml
reviewed: c855e1eb452758c6f1c79c860d630d6185937a08c57a172bccc884bcd34c2f83
title: "NativeBindingIncludeDirectory"
kind: api
owners: [Inno.Build.Toolchains]
apiSurface: source-clr
contracts:
- project.inno-build-toolchains
aliases: []
---

Preserves the order and search semantics of one native include requirement.

## Parameters

**Parameter `rootId`:** The component-local input root.

**Parameter `relativePath`:** The root-relative directory, or empty for the root itself.

**Parameter `system`:** Whether this directory contains system headers.

**Parameter `framework`:** Whether the compiler must use framework search semantics.

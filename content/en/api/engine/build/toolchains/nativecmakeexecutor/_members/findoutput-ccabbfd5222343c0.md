---
uid: api.ccabbfd5222343c04aa9d36dcf17832570a8359777985ad3364b1bff6b679c29
symbol: "engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.NativeCMakeExecutor.FindOutput(Inno.Build.Toolchains.NativeBuildContext,System.String,System.String)"
source: xml
reviewed: 9708a5ba5bec1ea3d57dabd867409233766dbffe7ae9fe27bc63020e60bc3372
title: "FindOutput"
kind: api
owners: [Inno.Build.Toolchains]
apiSurface: source-clr
---

Selects one declared output while excluding CMake's compiler probes and other build configurations.

**Parameter `context`:** The selected configuration and target generator policy.

**Parameter `buildDirectory`:** The component-owned CMake intermediate directory.

**Parameter `filePattern`:** The component's exact basename or bounded filename pattern.

**Returns:** The sole matching output, or an explicit failure for a missing or ambiguous result.

**Exception `T:System.IO.FileNotFoundException`:** The component did not produce exactly one expected output.

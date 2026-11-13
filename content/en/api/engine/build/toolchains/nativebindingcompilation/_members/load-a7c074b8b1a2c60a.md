---
uid: api.a7c074b8b1a2c60abea8e0fb8cf9c16014b1df1814ef2d9c22858df40c8fa2db
symbol: "engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.NativeBindingCompilation.Load(System.String)"
source: xml
reviewed: cafb1c7562f46123fc19f818450f81551be82582dae050f795f1953f5147eb0c
title: "Load"
kind: api
owners: [Inno.Build.Toolchains]
apiSurface: source-clr
---

Reads the current engine-owned compilation description from a selected native output.

**Parameter `nativeDirectory`:** The complete selected generation's native directory.

**Returns:** The validated description; missing or malformed descriptions fail explicitly.

**Exception `T:System.IO.IOException`:** The description cannot be read.

**Exception `T:System.Text.Json.JsonException`:** The description does not match the current contract.

**Exception `T:System.IO.InvalidDataException`:** A root, path or content identity is invalid.

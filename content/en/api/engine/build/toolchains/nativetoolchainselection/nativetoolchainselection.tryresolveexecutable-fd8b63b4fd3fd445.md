---
uid: api.fd8b63b4fd3fd4458db808dcd61d19f01338f67c9cabf05bf6433b76aa41773b
symbol: "engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.NativeToolchainSelection.TryResolveExecutable(System.String,System.String@)"
source: xml
reviewed: cb60095076d7e05fb25df1046f9f711cea7447e7518d6e6e44fe01d3f06eff60
title: "NativeToolchainSelection.TryResolveExecutable"
kind: api
owners: [Inno.Build.Toolchains]
apiSurface: source-clr
---

Checks an optional tool capability without discovering a command from the process environment.

## Parameters

**Parameter `name`:** The declared tool identity to check.

**Parameter `executable`:** The frozen absolute path when present, or an empty string when absent.

## Returns

True only when this selection explicitly supplies the requested tool.

## Exceptions

**Exception `T:System.ArgumentException`:** The tool identity is empty.

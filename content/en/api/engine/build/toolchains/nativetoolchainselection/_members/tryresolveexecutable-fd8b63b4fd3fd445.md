---
uid: api.fd8b63b4fd3fd4458db808dcd61d19f01338f67c9cabf05bf6433b76aa41773b
symbol: "engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.NativeToolchainSelection.TryResolveExecutable(System.String,System.String@)"
source: xml
reviewed: 7d67a2dcbdc103ec15cc281dcaca6069f81c870f906f41f9353100d6c6c53092
title: "TryResolveExecutable"
kind: api
owners: [Inno.Build.Toolchains]
apiSurface: source-clr
---

Checks an optional tool capability without discovering a command from the process environment.

**Parameter `name`:** The declared tool identity to check.

**Parameter `executable`:** The frozen absolute path when present, or an empty string when absent.

**Returns:** True only when this selection explicitly supplies the requested tool.

**Exception `T:System.ArgumentException`:** The tool identity is empty.

---
uid: api.d56aa7b9f763749f246b66f1df471174087c484cd6a4440eba858c8801bf16a1
symbol: "engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.ToolchainWorkingDirectory.#ctor(System.String,System.IDisposable)"
source: xml
reviewed: 0a8a2f27aaed5c3a9520f524a3b855826467f2527b7bf54d4869f1c29cffa2c8
title: "ToolchainWorkingDirectory.Constructor"
kind: api
owners: [Inno.Build.Toolchains]
apiSurface: source-clr
---

Captures an absolute execution path and its optional release protocol.

## Parameters

**Parameter `toolPath`:** The execution directory selected by the host provider.

**Parameter `ownership`:** The alias and lease owner, or null for direct physical execution.

## Exceptions

**Exception `T:System.ArgumentException`:** The execution path is not absolute.

---
uid: api.d1d324f57f7ec4dfbbcfce675be3e9dd24804484fa352471d6ee0efce83c2b16
symbol: "engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.NativeBuildContext.WithToolchain(Inno.Build.Toolchains.NativeToolchainSelection)"
source: xml
reviewed: 02487991ec140e9bc64f0eed48372a7bc57b0787de30ff34b7d53e740d929b6f
title: "WithToolchain"
kind: api
owners: [Inno.Build.Toolchains]
apiSurface: source-clr
---

Attaches a provider's immutable tool selection while preserving this operation's input ownership.

**Parameter `toolchain`:** The complete selection resolved for the requested target.

**Returns:** A scoped context sharing input snapshots and statistics with this operation.

**Exception `T:System.ArgumentNullException`:** The selection is null.

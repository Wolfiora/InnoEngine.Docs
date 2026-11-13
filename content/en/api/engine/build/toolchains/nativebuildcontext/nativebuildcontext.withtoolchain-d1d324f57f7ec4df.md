---
uid: api.d1d324f57f7ec4dfbbcfce675be3e9dd24804484fa352471d6ee0efce83c2b16
symbol: "engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.NativeBuildContext.WithToolchain(Inno.Build.Toolchains.NativeToolchainSelection)"
source: xml
reviewed: 82ebe3d3d322a6d47d203303d796755ccaa72c06fd8af32016472daa0e7f5c2d
title: "NativeBuildContext.WithToolchain"
kind: api
owners: [Inno.Build.Toolchains]
apiSurface: source-clr
---

Attaches a provider's immutable tool selection while preserving this operation's input ownership.

**Parameter `toolchain`:** The complete selection resolved for the requested target.

**Returns:** A scoped context sharing input snapshots and statistics with this operation.

**Exception `T:System.ArgumentNullException`:** The selection is null.

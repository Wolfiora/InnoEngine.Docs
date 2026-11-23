---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.4a7a53c987846a4b30e74c336c9487ff3def98be67478c001d4f7988903418cd
symbol: engine:Inno.Build.Products.Standard:M:Inno.Build.Products.Standard.StandardNativeComponents.CreatePlayer(Inno.Build.Toolchains.Bgfx.BgfxNativeBuildProfile,System.Func{System.String,Inno.Build.Toolchains.NativeComponentBuildOptions},System.Func{System.String,System.String,System.String,System.String})
title: StandardNativeComponents.CreatePlayer
kind: api
owners:
- Inno.Build.Products.Standard
apiSurface: source-clr
sourceFingerprint: 2a1f8a61756a38a2f01de86f33f42a7cda6fa01b466ea380801b53bfd72d07c8
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `profile`:** The selected integration-owned BGFX SDK invocation for standalone component builds.

**Parameter `options`:** The platform-owned configuration for each named component.

**Parameter `layout`:** The platform-owned destination of each component output, or null to exclude it.

## Returns

A fresh immutable Player plan without resolving tools or touching source files.

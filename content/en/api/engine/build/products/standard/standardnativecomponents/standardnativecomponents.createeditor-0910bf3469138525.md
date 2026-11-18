---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.0910bf3469138525394a9b6f4e95f8a5c33c48072c0166a0abf5ea4750e70430
symbol: engine:Inno.Build.Products.Standard:M:Inno.Build.Products.Standard.StandardNativeComponents.CreateEditor(Inno.Build.Toolchains.Bgfx.BgfxNativeBuildProfile,System.Func{System.String,Inno.Build.Toolchains.NativeComponentBuildOptions},System.Func{System.String,System.String,System.String,System.String})
title: StandardNativeComponents.CreateEditor
kind: api
owners:
- Inno.Build.Products.Standard
apiSurface: source-clr
sourceFingerprint: 5caa4f798bc9d317e195ad10491476e512f4a482b5d660c62d8750d558b9f659
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Returns

A fresh immutable Editor plan with the ImGuizmo dependency declared explicitly.

## Parameters

**Parameter `profile`:** The selected integration-owned BGFX SDK invocation for standalone component builds.

**Parameter `options`:** The platform-owned configuration for each named component.

**Parameter `layout`:** The platform-owned destination of each component output, or null to exclude it.

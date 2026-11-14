---
uid: api.9c7fcbce7f8bd5483e8f2b8b48cfb1a36f8980eb0e00db78c7ff420eb3215c7c
symbol: "engine:Inno.Build.SupportPacks.Core:M:Inno.Build.SupportPacks.PlayerSupportPackBuildContext.#ctor(System.String,System.String,Inno.Build.Toolchains.DotNetSdkDescriptor)"
source: xml
reviewed: ce738eb3a160d8ff13dcab074e44e29c2bc6db5f3587d0b0a270ea17d85dc99c
title: "PlayerSupportPackBuildContext.Constructor"
kind: api
owners: [Inno.Build.SupportPacks.Core]
apiSurface: source-clr
---

Creates immutable inputs for an isolated preparation operation.

## Parameters

**Parameter `engineRoot`:** The complete engine source checkout.

**Parameter `stagingDirectory`:** The empty transaction directory to populate.

**Parameter `sdk`:** The project-selected SDK frozen during read-only preflight.

## Exceptions

**Exception `T:System.ArgumentException`:** A required input is blank.

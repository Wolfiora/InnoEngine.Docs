---
uid: api.9c7fcbce7f8bd5483e8f2b8b48cfb1a36f8980eb0e00db78c7ff420eb3215c7c
symbol: "engine:Inno.Build.SupportPacks.Core:M:Inno.Build.SupportPacks.PlayerSupportPackBuildContext.#ctor(System.String,System.String,Inno.Build.Toolchains.DotNetSdkDescriptor)"
source: xml
reviewed: 6b2f1798a65196be4df7528551916ed8384842aa66c2e17138b21030c4ee1179
title: "Constructor"
kind: api
owners: [Inno.Build.SupportPacks.Core]
apiSurface: source-clr
---

Creates immutable inputs for an isolated preparation operation.

**Parameter `engineRoot`:** The complete engine source checkout.

**Parameter `stagingDirectory`:** The empty transaction directory to populate.

**Parameter `sdk`:** The project-selected SDK frozen during read-only preflight.

**Exception `T:System.ArgumentException`:** A required input is blank.

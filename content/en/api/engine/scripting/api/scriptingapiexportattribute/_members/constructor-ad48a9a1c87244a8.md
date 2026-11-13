---
uid: api.ad48a9a1c87244a8ae97742ccddc006569e8939d94cbcb2a888f8107f8f1b8cf
symbol: "engine:Inno.Scripting.Api:M:Inno.Scripting.Api.ScriptingApiExportAttribute.#ctor(System.Type,System.String,Inno.Scripting.Api.ScriptingApiScope)"
source: xml
reviewed: 635cb8d57f2cdf001640791848c1f7a059a38ba2aa4dbd23799d0d7344ba9f49
title: "Constructor"
kind: api
owners: [Inno.Scripting.Api]
apiSurface: source-clr
---

Creates an explicit script API export with a script-facing type name.

**Parameter `type`:** The runtime type exposed to scripts.

**Parameter `name`:** The type name presented by the script facade.

**Parameter `scope`:** The script profile that receives the type.

**Exception `T:System.ArgumentNullException`:** Thrown when `type` is `null`.

**Exception `T:System.ArgumentException`:** Thrown when `name` is empty.

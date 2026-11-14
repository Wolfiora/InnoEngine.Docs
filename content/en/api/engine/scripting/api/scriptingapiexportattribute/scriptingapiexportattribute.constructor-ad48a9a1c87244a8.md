---
uid: api.ad48a9a1c87244a8ae97742ccddc006569e8939d94cbcb2a888f8107f8f1b8cf
symbol: "engine:Inno.Scripting.Api:M:Inno.Scripting.Api.ScriptingApiExportAttribute.#ctor(System.Type,System.String,Inno.Scripting.Api.ScriptingApiScope)"
source: xml
reviewed: e79bcf2979041c946071db0db8d544fc470a95f308e942d0c80e7baf49135ed5
title: "ScriptingApiExportAttribute.Constructor"
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

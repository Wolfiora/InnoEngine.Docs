---
uid: api.88d69417755f6eefb05629c92b96424e21b31e030d144422da3e3ea6637394cc
symbol: "scripting:Inno.Core.Serialization:M:InnoEngine.Serialization.SerializationWriter.WriteObject(System.String,System.Action{InnoEngine.Serialization.SerializationWriter})"
source: xml
reviewed: 44cf7ed9a2a9a4cdb51a37cf2aaec3de1fbcc3a67a8592ef1d38bdc1e2db4b9f
title: "SerializationWriter.WriteObject"
kind: api
owners: [Inno.Core.Serialization]
apiSurface: editor-script
apiScope: Runtime
---

Writes a named structured object.

**Parameter `name`:** The unique non-empty member name.

**Parameter `write`:** The callback that fills the child object.

**Exception `T:System.ArgumentNullException`:** Thrown when `write` is null.

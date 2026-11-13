---
uid: api.88d69417755f6eefb05629c92b96424e21b31e030d144422da3e3ea6637394cc
symbol: "scripting:Inno.Core.Serialization:M:InnoEngine.Serialization.SerializationWriter.WriteObject(System.String,System.Action{InnoEngine.Serialization.SerializationWriter})"
source: xml
reviewed: a6a661ea466f4ff59296a79483fd18f478364f772f6dfae16cb5764d5bf5bf70
title: "WriteObject"
kind: api
owners: [Inno.Core.Serialization]
apiSurface: editor-script
apiScope: Runtime
---

Writes a named structured object.

**Parameter `name`:** The unique non-empty member name.

**Parameter `write`:** The callback that fills the child object.

**Exception `T:System.ArgumentNullException`:** Thrown when `write` is null.

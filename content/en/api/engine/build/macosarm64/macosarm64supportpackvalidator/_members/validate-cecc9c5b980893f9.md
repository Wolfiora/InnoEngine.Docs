---
uid: api.cecc9c5b980893f9e2ee8d36fe94a16d0e900dbd1e8e5d826687875815fb0d5d
symbol: "engine:Inno.Build.MacOSArm64:M:Inno.Build.MacOSArm64.MacOSArm64SupportPackValidator.Validate(System.String)"
source: xml
reviewed: 5fe3df03ea079f6637411a98c76dd5fbec9b12d4515a4f9e186fce22b491d2e1
title: "Validate"
kind: api
owners: [Inno.Build.MacOSArm64]
apiSurface: source-clr
---

Rejects incomplete or foreign platform inputs in the supplied Support Pack.

**Parameter `directory`:** The isolated or installed target directory to validate.

**Exception `T:System.IO.InvalidDataException`:** A required input is absent or the closure contains a foreign native binary.

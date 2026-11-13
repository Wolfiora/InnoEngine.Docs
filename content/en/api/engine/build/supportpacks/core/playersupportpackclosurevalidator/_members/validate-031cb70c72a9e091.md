---
uid: api.031cb70c72a9e091f83ba74e1cd38194d31e51d83e16dc3bc87f05d790499043
symbol: "engine:Inno.Build.SupportPacks.Core:M:Inno.Build.SupportPacks.PlayerSupportPackClosureValidator.Validate(System.String)"
source: xml
reviewed: d18504cb0c8e5edea5018432f45668637da7ae9b8858a8d884aa7e7a699315e9
title: "Validate"
kind: api
owners: [Inno.Build.SupportPacks.Core]
apiSurface: source-clr
---

Rejects missing selected inputs, undeclared native groups and invalid deployment metadata.

**Parameter `directory`:** The complete Pack directory whose content manifest is independently verified by its publisher.

**Exception `T:System.IO.InvalidDataException`:** A selected input or native group is missing or a library belongs to an undeclared group.

**Exception `T:System.IO.IOException`:** An input escapes ownership, crosses a link or cannot be read.

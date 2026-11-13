---
uid: api.031cb70c72a9e091f83ba74e1cd38194d31e51d83e16dc3bc87f05d790499043
symbol: "engine:Inno.Build.SupportPacks.Core:M:Inno.Build.SupportPacks.PlayerSupportPackClosureValidator.Validate(System.String)"
source: xml
reviewed: d47b42c147bba02c28a4569a07e8ae6435f9551f6ce286c513c739dda9194e0c
title: "Validate"
kind: api
owners: [Inno.Build.SupportPacks.Core]
apiSurface: source-clr
---

Rejects missing selected inputs, undeclared native groups and invalid deployment metadata.

**Parameter `directory`:** The complete Pack directory whose content manifest is independently verified by its publisher.

**Exception `T:System.IO.InvalidDataException`:** A selected input or native group is missing or a library belongs to an undeclared group.

**Exception `T:System.IO.IOException`:** An input escapes ownership, crosses a link or cannot be read.

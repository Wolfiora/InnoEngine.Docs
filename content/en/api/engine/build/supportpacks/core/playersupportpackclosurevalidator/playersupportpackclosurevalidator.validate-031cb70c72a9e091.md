---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.031cb70c72a9e091f83ba74e1cd38194d31e51d83e16dc3bc87f05d790499043
symbol: engine:Inno.Build.SupportPacks.Core:M:Inno.Build.SupportPacks.PlayerSupportPackClosureValidator.Validate(System.String)
title: PlayerSupportPackClosureValidator.Validate
kind: api
owners:
- Inno.Build.SupportPacks.Core
apiSurface: source-clr
reviewed: e57055c5095afa715fc8f53b5f8cdb355bfc5fe68e4062a512e6f921cf524293
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `directory`:** The complete Pack directory whose content manifest is independently verified by its publisher.

## Exceptions

**Exception `T:System.IO.InvalidDataException`:** A selected input or native group is missing or a library belongs to an undeclared group.

**Exception `T:System.IO.IOException`:** An input escapes ownership, crosses a link or cannot be read.

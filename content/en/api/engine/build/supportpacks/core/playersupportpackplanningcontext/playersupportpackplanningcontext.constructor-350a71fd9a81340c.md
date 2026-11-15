---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.350a71fd9a81340c0d858f92134f754486304a3ae4d769840ef2e438d550fd10
symbol: engine:Inno.Build.SupportPacks.Core:M:Inno.Build.SupportPacks.PlayerSupportPackPlanningContext.#ctor(System.String,System.String)
title: PlayerSupportPackPlanningContext.Constructor
kind: api
owners:
- Inno.Build.SupportPacks.Core
apiSurface: source-clr
reviewed: 725419035edde52b9d61477373c4d9492bcb0c3eb65439cf1db691aa5a700166

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

Captures the checkout and host from which project-scoped tools are resolved.

## Parameters

**Parameter `engineRoot`:** The complete checkout to inspect without modifying publication output.

**Parameter `dotnetHost`:** The explicitly selected managed host executable.

## Exceptions

**Exception `T:System.ArgumentException`:** A required input is blank.

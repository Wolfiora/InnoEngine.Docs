---
uid: api.a5d25c498aa764bb21b4ebb48c46107183c29bfe1e4102d94dbfaeee033f4824
symbol: "engine:Inno.Core.Identity:M:Inno.Core.Identity.Identity.Resolve\u0060\u00601"
source: xml
reviewed: 10a3db146b042cd07d92fd2c2eb57440068d7e3e2de2f091755f0290ff223a21
title: "Resolve"
kind: api
owners: [Inno.Core.Identity]
apiSurface: source-clr
---

Resolves this transient snapshot through its original weak identity registry.

**Type parameter `TObject`:** The expected identity object type.

**Returns:** The current object, or null if the registry retired, the slot changed generation, or the type differs.

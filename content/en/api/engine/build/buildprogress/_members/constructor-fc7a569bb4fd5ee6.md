---
uid: api.fc7a569bb4fd5ee66411862c93c749cf1f24f460de09223c50d87f9eb8056591
symbol: "engine:Inno.Build:M:Inno.Build.BuildProgress.#ctor(System.String,System.Double,System.String)"
source: xml
reviewed: 7eceda234fb710c828744fb25a2cc87f6f24d3283b749a74b398afa80a10c9df
title: "Constructor"
kind: api
owners: [Inno.Build]
apiSurface: source-clr
---

Creates a validated progress update.

**Parameter `stage`:** The stable build stage name.

**Parameter `fraction`:** The completed fraction in the inclusive range from zero to one.

**Parameter `message`:** A concise human-readable status message.

**Exception `T:System.ArgumentException`:** Thrown when stage or message is empty.

**Exception `T:System.ArgumentOutOfRangeException`:** Thrown when fraction is outside the supported range.

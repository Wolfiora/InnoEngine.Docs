---
uid: api.fc7a569bb4fd5ee66411862c93c749cf1f24f460de09223c50d87f9eb8056591
symbol: "engine:Inno.Build:M:Inno.Build.BuildProgress.#ctor(System.String,System.Double,System.String)"
source: xml
reviewed: 0640f1322b5e8dc23e7b35606d9ace4aad3015ebb9a2ba2054d0d4f9b7c5b836
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

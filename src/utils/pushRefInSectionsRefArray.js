const pushRefInSectionsRefArray = (
  sectionsRefArray,
  sectionName,
  sectionRef
) => {
  const sectionIsNotInArray = sectionsRefArray.every((section) => {
    return section.name !== sectionName;
  });

  if (sectionIsNotInArray || sectionsRefArray.length === 0) {
    sectionsRefArray.push({
      sectionRef: sectionRef.current,
      name: sectionName,
    });
  }
};

export default pushRefInSectionsRefArray;

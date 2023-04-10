import { useState } from 'react';
import PropTypes from 'prop-types';
import { Field } from 'formik';
import placeholder from 'images/mobile/form-add-placeholder.png';
import { Loader } from 'components/Loader/Loader';
import { Box } from 'components/Box';
import { IoMdRemoveCircle } from 'react-icons/io';
import {
  FieldsetDesc,
  LabelFile,
  InputFile,
  ThumbImg,
  RemoveFileBtn,
  Label,
  InputText,
  DisabledInput,
  Placeholder,
  StyledSelect,
} from './RecipeDescriptionFields.styled';

export const RecipeDescriptionFields = ({
  setFieldValue,
  values,
  optionsCategory,
  optionsTimes,
}) => {
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileUpload = e => {
    const selectedFile = e.target.files[0];
    setLoading(true);

    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result);
      setLoading(false);
    };
    reader.readAsDataURL(selectedFile);
    setFieldValue('file', selectedFile);
  };

  const removeFileUpload = () => {
    setPreview(null);
    setFieldValue('file', '');
  };

  return (
    <>
      <FieldsetDesc>
        <Box>
          <LabelFile isLoading={loading}>
            {loading ? (
              <Loader />
            ) : (
              <ThumbImg
                src={preview || placeholder}
                width="280"
                height="270"
                alt="preview"
              />
            )}
            {preview && (
              <RemoveFileBtn onClick={removeFileUpload}>
                <IoMdRemoveCircle />{' '}
              </RemoveFileBtn>
            )}

            {!preview && (
              <InputFile type="file" name="file" onChange={handleFileUpload} />
            )}
          </LabelFile>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          width="100%"
        >
          <Label>
            <InputText
              type="text"
              name="title"
              placeholder="Enter item title"
            />
          </Label>
          <Label>
            <InputText
              type="text"
              name="about"
              placeholder="Enter about recipe"
            />
          </Label>
          <Label>
            <DisabledInput>
              <Placeholder>Category</Placeholder>
              <Field name="category">
                {({ field }) => (
                  <StyledSelect
                    options={optionsCategory}
                    defaultValue={optionsCategory.find(
                      ({ value }) => value === values.category
                    )}
                    isSearchable={false}
                    className="сustom-select-container"
                    classNamePrefix="сustom-select"
                    onChange={option => setFieldValue(field.name, option.value)}
                  />
                )}
              </Field>
            </DisabledInput>
          </Label>
          <Label>
            <DisabledInput>
              <Placeholder>Cooking time</Placeholder>
              <Field name="time">
                {({ field }) => (
                  <StyledSelect
                    options={optionsTimes}
                    defaultValue={optionsTimes.find(
                      ({ value }) => value === values.time
                    )}
                    isSearchable={false}
                    className="сustom-select-container"
                    classNamePrefix="сustom-select"
                    onChange={option => setFieldValue(field.name, option.value)}
                  />
                )}
              </Field>
            </DisabledInput>
          </Label>
        </Box>
      </FieldsetDesc>
    </>
  );
};

RecipeDescriptionFields.propTypes = {
  setFieldValue: PropTypes.func.isRequired,
  values: PropTypes.object,
  optionsCategory: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string,
    })
  ).isRequired,
  optionsTimes: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string,
    })
  ).isRequired,
};

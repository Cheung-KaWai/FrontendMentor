import React from "react";
import "../../styles/dashboard.scss";
import { Formik, Field, Form, FieldArray } from "formik";
import { ReactComponent as DeleteInput } from "../../images/input-cross.svg";
import { boardActions } from "../../store/board-slice";
import { useDispatch } from "react-redux";

export default function AddColumns() {
  const dispatch = useDispatch();

  const addColumns = (values) => {
    dispatch(boardActions.hideFormAddColumns());
    //Save columns in redux
    dispatch(boardActions.addColumns(values));
  };

  return (
    <div className="addColumns">
      <h2>Platform Launch</h2>
      <Formik initialValues={{ columns: [""] }} onSubmit={addColumns}>
        {({ values }) => (
          <Form>
            <h3>Board Columns</h3>
            <FieldArray name="columns">
              {({ remove, push }) => (
                <div>
                  <div className="listInputs">
                    {values.columns.length > 0 &&
                      values.columns.map((column, index) => (
                        <div key={index} className="inputField">
                          <label htmlFor={`columns.${index}`}>
                            <Field
                              name={`columns.${index}`}
                              className="input"
                            />
                          </label>
                          <DeleteInput
                            onClick={() => {
                              if (values.columns.length !== 1) {
                                remove(index);
                              }
                            }}
                          />
                        </div>
                      ))}
                  </div>
                  <button
                    className="addButton"
                    onClick={() => push("")}
                    type="button"
                  >
                    Add New Column
                  </button>
                  <span className="line" />
                  <button className="saveButton" type="submit">
                    Save Changes
                  </button>
                </div>
              )}
            </FieldArray>
          </Form>
        )}
      </Formik>
    </div>
  );
}

import React, { useEffect, useRef, useState } from 'react';
import { unwrapResult } from '@reduxjs/toolkit';
// State modules required
import { useAppSelector, useAppDispatch } from '@/lib/redux/hooks';
import { updateLocale } from '@/lib/redux/i18n/i18nActions';
// import { updateProfile } from '@/lib/redux/auth/authActions';
// Utils required
import { Modal } from 'bootstrap';
import PreloaderSpinner from '@/components/PreloaderSpinner';

interface Props {
  children?: React.ReactNode; // any | null | undefined
}

const I18nModal: React.FC<Props> = (props) => {
  const dispatch = useAppDispatch();
  // States
  const [isLocaleLoading, setIsLocaleLoading] = useState<boolean>(false);
  const i18nLocale = useAppSelector((state) => { return state.i18n.locale });
  // const { authUser } = useAppSelector((state) => { return state.auth });
  // Refs
  const ref = useRef<HTMLDivElement>(null);
  const locale = i18nLocale; // authUser?.profile?.settings?.language || i18nLocale;

  useEffect(() => {
    const modal = new Modal(ref.current!, {
      keyboard: false
    })

    return () => {
      // Do proper cleanup on unmount
      // var modal = Modal.getInstance(ref.current!); // Returns a Bootstrap modal instance
      if (modal) {
        modal.dispose();
      }
    };
  }, []);

  const handleLocaleChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    let value = e.target.value;

    try {
      setIsLocaleLoading(true);

      // if (authUser) {
      //   const resultAction = await dispatch(updateProfile({
      //     settings: {
      //       language: value
      //     }
      //   }));

      //   unwrapResult(resultAction);
      // }

      dispatch(updateLocale(value));
    } catch (err) {
      console.error(err);
    } finally {
      setIsLocaleLoading(false);
    }
  };

  // const handleClickBackdrop = (e: React.MouseEvent<HTMLDivElement>) => {
  //   e.preventDefault();
  // };

  return (
    <div
      className="modal fade p-3"
      id="I18nModal"
      ref={ref}
      tabIndex={-1}
      aria-labelledby="I18nModalLabel"
      aria-hidden="true"
      data-bs-backdrop="false"
    >
      <div className="modal-dialog modal-sm modal-dialog-centered relative z-1">
        <div className="modal-content">
          <div className="modal-body">
            <fieldset>
              <div className="mb-3">
                <label htmlFor="location" className="form-label font-medium text-gray-500 block mb-1">
                  Location
                </label>
                <select id="location" className="form-select" disabled={true}>
                  <option value="PH">Philippines</option>
                </select>
              </div>

              <div className="mb-3">
                <label htmlFor="language" className="form-label font-medium text-gray-500 block mb-1">
                  Language
                </label>
                <div className="relative">
                  {isLocaleLoading && (
                    <div className="absolute inset-0 bg-white bg-opacity-40 flex rounded justify-center items-center">
                      <PreloaderSpinner className="text-orange h-6 w-6 border-2" />
                    </div>
                  )}
                  <select
                    name="locale"
                    id="language"
                    className="form-select"
                    placeholder="Language"
                    value={locale}
                    onChange={handleLocaleChange}
                  >
                    <option value="en">English</option>
                    <option value="fil">Filipino</option>
                  </select>
                </div>
              </div>
            </fieldset>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
      <div className="modal-backdrop z-0 bg-black bg-opacity-50" data-bs-dismiss="modal"></div>
    </div>
  );
}

export default I18nModal;
